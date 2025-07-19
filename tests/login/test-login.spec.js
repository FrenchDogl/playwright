import { test, expect } from '@playwright/test';

const {
    fazerLogin,
    abrirSite,
    digitarEmail,
    digitarSenha,
    digitarEmailIncorreto,
    digitarSenhaIncorreta,
    clicarBotaoCheck,
    clicarLogin
} = require('./page-login')

test('Login com Sucesso', async ({ page }) => {
    await fazerLogin(page)
})

test('Login sem email', async ({ page }) => {
    await abrirSite(page)
    await digitarSenha(page)
    await clicarBotaoCheck(page)
    await clicarLogin(page)
    await expect(page.getByText('E-mail inválido.')).toBeVisible()
})

test('Login sem senha', async ({ page }) => {
    await abrirSite(page)
    await digitarEmail(page)
    await clicarBotaoCheck(page)
    await clicarLogin(page)
    await expect(page.getByText('Senha inválida.')).toBeVisible()
})

test('Login com email incorreto', async ({ page }) => {
    await abrirSite(page)
    await digitarEmailIncorreto(page)
    await digitarSenha(page)
    await clicarBotaoCheck(page)
    await clicarLogin(page)
    await expect(page.getByText('E-mail inválido.')).toBeVisible()
})

test('Login com senha incorreta', async ({ page }) => {
    await abrirSite(page)
    await digitarEmail(page)
    await digitarSenhaIncorreta(page)
    await clicarBotaoCheck(page)
    await clicarLogin(page)
    await expect(page.getByText('Senha inválida.')).toBeVisible()
})