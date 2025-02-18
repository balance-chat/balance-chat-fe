import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { LoginForm } from './LoginForm';

const VALID_EMAIL = 'test@example.com';
const VALID_PW = 'password123';
const INVALID_EMAIL = 'test email@example.com';
const INVALID_PW = 'pw123';

describe('login > LoginForm', () => {
  const renderLoginForm = () => {
    return render(<LoginForm />);
  };

  it('모든 필드와 전송 버튼이 렌더링되어야 한다.', () => {
    renderLoginForm();
    const emailInput = screen.getByPlaceholderText(/이메일/);
    const passwordInput = screen.getByPlaceholderText(/비밀번호/);
    const submitButton = screen.getByRole('button', { name: /로그인하기/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('이메일은 공백이 있으면 에러 메시지가 표시된다.', async () => {
    renderLoginForm();
    const emailInput = screen.getByPlaceholderText(/이메일/);

    fireEvent.change(emailInput, { target: { value: INVALID_EMAIL } });
    fireEvent.blur(emailInput);

    const errorMessage = await screen.findByText(/올바른 이메일 형식을 입력/);
    expect(errorMessage).toBeInTheDocument();
  });

  it('비밀번호는 8자 미만이면 에러 메시지가 표시된다.', async () => {
    renderLoginForm();
    const passwordInput = screen.getByPlaceholderText(/비밀번호/);

    fireEvent.change(passwordInput, { target: { value: INVALID_PW } });
    fireEvent.blur(passwordInput);

    const errorMessage = await screen.findByText(/비밀번호는 최소 8자 이상/);
    expect(errorMessage).toBeInTheDocument();
  });

  it('모든 필드가 유효하면 로그인하기 버튼이 활성화된다.', async () => {
    renderLoginForm();
    const emailInput = screen.getByPlaceholderText(/이메일/);
    const passwordInput = screen.getByPlaceholderText(/비밀번호/);
    const submitButton = screen.getByRole('button', { name: /로그인하기/i });

    expect(submitButton).toBeDisabled();

    fireEvent.change(emailInput, { target: { value: VALID_EMAIL } });
    fireEvent.blur(emailInput);
    fireEvent.change(passwordInput, { target: { value: VALID_PW } });
    fireEvent.blur(passwordInput);

    await waitFor(() => {
      expect(submitButton).toBeEnabled();
    });
  });
});
