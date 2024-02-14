import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useSignIn, useUserToken } from "../../store/userStore";

function Login() {
  const [loading, setLoading] = useState(false);

  const signIn = useSignIn();
  const token = useUserToken();
  if (token.accessToken) {
    return <Navigate to="/" replace />;
  }

  const handleFinish = async ({ username, password }) => {
    setLoading(true);
    try {
      await signIn({ username, password });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="mb-4 text-2xl font-bold xl:text-3xl">sign in</div>
      <Form name="login" size="large" onFinish={handleFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "user Name required" }]}
        >
          <Input placeholder="User Name" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "password required" }]}
        >
          <Input.Password type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Row>
            <Col span={12}>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember Me</Checkbox>
              </Form.Item>
            </Col>
            <Col span={12} className="text-right">
              <button className="!underline">forget Password</button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full"
            loading={loading}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default Login;
