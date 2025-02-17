import { test, expect } from '@playwright/test';

test.describe('로그인 페이지', () => {
  // 각 테스트 전에 로그인 페이지로 이동
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
  });

  test('로그인 버튼 활성화 ', async ({ page }) => {
    const emailInput = page.locator('input[name="email"]');
    await emailInput.fill('test@example.com');

    const passwordInput = page.locator('input[name="password"]');
    await passwordInput.fill('Password8CharsOrMore');

    const loginBtn = page.getByRole('button', { name: '로그인하기' });
    await expect(loginBtn).not.toBeDisabled();
  });

  test('비어있는 필드 존재 시 로그인 버튼 비활성화', async ({ page }) => {
    const emailInput = page.locator('input[name="email"]');
    await emailInput.fill('test@example.com');

    const loginBtn = page.getByRole('button', { name: '로그인하기' });
    await expect(loginBtn).toBeDisabled();
  });

  test('유효하지 않은 이메일 형식 에러 메시지 표시', async ({ page }) => {
    const emailInput = page.locator('input[name="email"]');
    await emailInput.fill('invalid email');
    await emailInput.blur();

    const errorMessage = page.locator('text=올바른 이메일 형식을 입력하세요');
    await expect(errorMessage).toBeVisible();
  });

  test('8자 미만 비밀번호 에러 메시지 표시', async ({ page }) => {
    const passwordInput = page.locator('input[name="password"]');
    await passwordInput.fill('pw');
    await passwordInput.blur();

    const errorMessage = page.locator('text=비밀번호는 최소 8자 이상');
    await expect(errorMessage).toBeVisible();
  });
});
