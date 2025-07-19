import { test, expect } from '@playwright/test';

const {
    fazerLogin,
    abrirSite,
    digitarEmail,
    digitarSenha,
    digitarEmailIncorreto,
    digitarSenhaIncorreta
} = require('./page-login')

test('Login com Sucesso', async ({ page }) => {
    await fazerLogin(page)
})

test('Login sem email', async ({ page }) => {
    await abrirSite(page)
    await digitarSenha(page)
    await page.getByRole('checkbox', { name: 'Lembrar de mim' }).check()
    await page.getByRole('button', { name: 'login' }).click()
    await expect(page.getByText('E-mail inválido.')).toBeVisible()
})

test('Login sem senha', async ({ page }) => {
    await abrirSite(page)
    await digitarEmail(page)
    await page.getByRole('checkbox', { name: 'Lembrar de mim' }).check()
    await page.getByRole('button', { name: 'login' }).click()
    await expect(page.getByText('Senha inválida.')).toBeVisible()
})

test('Login com email incorreto', async ({ page }) => {
    await abrirSite(page)
    await digitarEmailIncorreto(page)
    await digitarSenha(page)
    await page.getByRole('checkbox', { name: 'Lembrar de mim' }).check()
    await page.getByRole('button', { name: 'login' }).click()
    await expect(page.getByText('E-mail inválido.')).toBeVisible()
})

test('Login com senha incorreta', async ({ page }) => {
    await abrirSite(page)
    await digitarEmail(page)
    await digitarSenhaIncorreta(page)
    await page.getByRole('checkbox', { name: 'Lembrar de mim' }).check()
    await page.getByRole('button', { name: 'login' }).click()
    await expect(page.getByText('Senha inválida.')).toBeVisible()
})