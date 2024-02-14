import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Checkbox, Col, Divider, Form, Input, Row } from "antd";
import { AiFillGithub, AiFillGoogleCircle, AiFillWechat } from "react-icons/ai";

import { DEFAULT_USER, TEST_USER } from "../../mock/assets";
import { useSignIn, useUserInfo } from "../../store/userStore";
import ProTag from "../../components/Tag";
import { useThemeToken } from "../../theme/use-theme-token";

function LoginForm() {
  const navigate = useNavigate();
  const themeToken = useThemeToken();
  const [loading, setLoading] = useState(false);

  const signIn = useSignIn();
  const userInfo = useUserInfo();

  if (!userInfo) return null;

  const handleFinish = async ({ username, password }) => {
    setLoading(true);
    try {
      await signIn({ username, password });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div
        style={{ marginBottom: "1rem", fontSize: "1.5rem", fontWeight: "bold" }}
      >
        Sign in
      </div>
      <Form
        name="login"
        size="large"
        initialValues={{
          remember: true,
          username: DEFAULT_USER.username,
          password: DEFAULT_USER.password,
        }}
        onFinish={handleFinish}
      >
        <div
          style={{
            marginBottom: "1rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Alert
            type="info"
            message={
              <>
                <div style={{ display: "flex" }}>
                  <ProTag>Admin user:</ProTag>
                  <strong
                    style={{
                      marginLeft: "0.5rem",
                      color: themeToken.colorInfoTextHover,
                    }}
                  >
                    <span>{DEFAULT_USER.username}</span>
                  </strong>
                </div>

                <div style={{ display: "flex" }}>
                  <ProTag>Test user:</ProTag>
                  <strong
                    style={{
                      marginLeft: "0.5rem",
                      color: themeToken.colorInfoTextHover,
                    }}
                  >
                    <span>{TEST_USER.username}</span>
                  </strong>
                </div>

                <div>
                  <ProTag>password:</ProTag>
                  <strong
                    style={{
                      marginLeft: "0.5rem",
                      color: themeToken.colorInfoTextHover,
                    }}
                  >
                    {DEFAULT_USER.password}
                  </strong>
                </div>
              </>
            }
            showIcon
          />
        </div>

        <Form.Item
          name="username"
          rules={[{ required: true, message: "user name required" }]}
        >
          <Input placeholder="username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "passord required" }]}
        >
          <Input.Password type="password" placeholder="password" />
        </Form.Item>
        <Form.Item>
          <Row>
            <Col span={12}>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>remember me</Checkbox>
              </Form.Item>
            </Col>
            <Col span={12} style={{ textAlign: "right" }}>
              <button className="underline">forget password</button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%" }}
            loading={loading}
          >
            login
          </Button>
        </Form.Item>

        <Row align="middle" gutter={8}>
          <Col span={12} flex="1">
            <Button
              style={{ width: "100%", fontSize: "0.875rem" }}
              onClick={() => navigate("/qr-code-page")}
            >
              mobile signIn
            </Button>
          </Col>
          
          <Col span={9} flex="1" onClick={() => navigate("/qr-code-page")}>
            <Button style={{ width: "100%", fontSize: "0.875rem" }}>
              sign up
            </Button>
          </Col>
        </Row>

        <Divider style={{ fontSize: "0.75rem" }}>other sign in</Divider>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            fontSize: "1.5rem",
          }}
        >
          <AiFillGithub />
          <AiFillWechat />
          <AiFillGoogleCircle />
        </div>
      </Form>
    </div>
  );
}

export default LoginForm;
