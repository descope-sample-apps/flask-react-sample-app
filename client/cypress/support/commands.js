// cypress/support/commands.js

const projectId = Cypress.env('descope_project_id')
const managementKey = Cypress.env('descope_management_key')
const descopeAPIDomain = "api.descope.com"

// Define the authorization header
const authHeader = {
    'Authorization': `Bearer ${projectId}:${managementKey}`,
}

// Define the base URL for Descope API
const descopeApiBaseURL = `https://${descopeAPIDomain}/v1`;

const testUserLoginId = "testUser" + Math.floor(1000 + Math.random() * 9000) + "@gmail.com"; // Must match email to pass validation

// Define the test user details
const testUser = {
    loginId: testUserLoginId,
    email: testUserLoginId,
    phone: "+11231231234",
    verifiedEmail: true,
    verifiedPhone: true,
    displayName: "Test User",
    test: true,
}
// Add the loginViaDescopeUI command
// NOTE: UI login is specific to `otp-over-email` flow with "Full name" input
Cypress.Commands.add('loginViaDescopeUI', () => {
    cy.request({
        method: 'POST',
        url: `${descopeApiBaseURL}/mgmt/user/create`,
        headers: authHeader,
        body: testUser,
    })
        .then(({ body }) => {
            const loginId = body["user"]["loginIds"][0];
            cy.request({
                method: 'POST',
                url: `${descopeApiBaseURL}/mgmt/tests/generate/otp`,
                headers: authHeader,
                body: {
                    "loginId": loginId,
                    "deliveryMethod": "email"
                }
            })
                .then(({ body }) => {
                    const otpCode = body["code"]
                    const loginID = body["loginId"]
                    const homePageUrl = "/?project=" + projectId + "&flow=otp-over-email&theme=dark"
                    cy.visit(homePageUrl)

                    // 1. Submit "Email"
                    cy.get('descope-wc')
                        .find('input')
                        .type(loginID)
                    cy.get('descope-wc')
                        .find('button').contains('Continue').click()

                    // 2. Submit "OTP code"
                    cy.get('descope-wc').find('.descope-input-wrapper').find('input').should('exist') // Assertion added to wait for the OTP code input to appear
                    let otpCodeArray = Array.from(otpCode); // Convert the OTP code string to an array
                    for (var i = 0; i < otpCodeArray.length; i++) {
                        cy.get('descope-wc').find('.descope-input-wrapper').find('input').eq(i + 1).type(otpCodeArray[i], { force: true })
                    }
                    cy.get('descope-wc')
                        .find('button').contains('Submit').click()

                    // 3. Submit "Full name"
                    cy.get('descope-wc').find('.descope-input-wrapper').should('have.text', "Full name") // Assertion added to wait for the OTP code input to appear
                    cy.get('descope-wc')
                        .find('button').contains('Submit').click()
                })
        })
})

// Add the deleteAllTestUsers command
Cypress.Commands.add('deleteAllTestUsers', () => {
    cy.request({
        method: 'DELETE',
        url: `${descopeApiBaseURL}/mgmt/user/test/delete/all`,
        headers: authHeader,
    })
})s