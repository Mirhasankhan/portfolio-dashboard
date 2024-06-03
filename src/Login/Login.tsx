import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";

const Login = () => {
  const [loginAccount] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (
      e.currentTarget.elements.namedItem("email") as HTMLInputElement
    ).value;
    const password = (
      e.currentTarget.elements.namedItem("password") as HTMLInputElement
    ).value;
    const userData = {
      email,
      password: +password,
    };
    const res = await loginAccount(userData);
    if (res?.data?.success) {
      dispatch(
        setUser({
          email: res.data.email,
          role: res.data.role,
          token: "token will come",
        })
      );
      navigate("/dashboard");
    }
  };
  return (
    <div className="flex justify-center items-center">
      <form className="flex flex-col border p-5 mt-12" onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          className="border p-1 rounded-md"
          type="email"
          name="email"
          id="email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          className="border p-1 rounded-md"
          type="password"
          name="password"
          id="password"
          required
        />
        <button
          className="bg-cyan-300 px-3 py-2 rounded-md border border-cyan-300 mt-3"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
