import { test, expect } from "@playwright/test";
const {
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
} = require('./page-cadastro')

test('Cadastro com Sucesso', async ({ page }) => {
  await abrirSite(page)
  await digitarNome(page)
  await digitarEmail(page)
  await digitarSenha(page)
  await page.getByRole('button', { name: 'Cadastrar' }).click()
  await cadastroRealizado(page)
})

test('Cadastro sem Nome', async ({ page }) => {
  await abrirSite(page)
  await digitarEmail(page)
  await digitarSenha(page)
  await page.getByRole('button', { name: 'Cadastrar' }).click()
  await semNome(page)
})

test('Cadastro sem Email', async ({ page }) => {
  await abrirSite(page)
  await digitarNome(page)
  await digitarSenha(page)
  await page.getByRole('button', { name: 'Cadastrar' }).click()
  await semEmail(page)
})

test('Cadastro sem Senha', async ({ page }) => {
  await abrirSite(page)
  await digitarNome(page)
  await digitarEmail(page)
  await page.getByRole('button', { name: 'Cadastrar' }).click()
  await semSenha(page)
})

test('Cadastro com Email inválido', async ({page}) => {
  await abrirSite(page)
  await digitarNome(page)
  await digitarEmailIncorreto(page)
  await digitarSenha(page)
  await page.getByRole('button', { name: 'Cadastrar' }).click()
  await semEmail(page)
})

test('Cadastro com Senha Inválida', async ({page}) => {
  await abrirSite(page)
  await digitarNome(page)
  await digitarEmail(page)
  await digitarSenhaIncorreta(page)
  await page.getByRole('button', { name: 'Cadastrar' }).click()
  await semSenha(page)
})