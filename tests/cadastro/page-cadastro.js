const { faker } = require('@faker-js/faker')
const { expect } = require('@playwright/test')

const name = faker.person.fullName()
const email = faker.internet.email()
const password = faker.internet.password()

const abrirSite = async (page) => {
    await page.goto('/register')
}
const clicarRegistrar = async (page) => {
    
}
const digitarNome = async (page) => {
    await page.locator('#user').fill(name)
}
const digitarEmail = async (page) => {
    await page.locator('#email').fill(email)
}
const digitarSenha = async (page) => {
    await page.locator('#password').fill(password)
}
const digitarEmailIncorreto = async (page) => {
    const email = faker.person.firstName()
    await page.locator('#email').fill(name)
}
const digitarSenhaIncorreta = async (page) => {
    const password = faker.internet.password({length: 5})
    await page.locator('#password').fill(password)
}
const cadastroRealizado = async (page) => {
    await expect(page.getByRole('heading', { name: 'Cadastro realizado!' })).toBeVisible
    await expect(page.getByText('Bem-vindo ' + name)).toBeVisible
}
const semNome = async (page) => {
    await expect(page.getByText('O campo nome deve ser')).toBeVisible
}
const semEmail = async (page) => {
    await expect(page.getByText('O campo e-mail deve ser')).toBeVisible
}
const semSenha = async (page) => {
    await expect(page.getByText('O campo senha deve ter pelo')).toBeVisible
}

module.exports = {
    abrirSite,
    digitarNome,
    digitarEmail,
    digitarSenha,
    digitarEmailIncorreto,
    digitarSenhaIncorreta,
    cadastroRealizado,
    semNome,
    semEmail,
    semSenha
}