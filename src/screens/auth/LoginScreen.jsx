import React, { Component } from "react";
import { NavLink, Link, useRouteMatch } from "react-router-dom";
import InputField from "components/InputField";
import { Input, Button } from "reactstrap";
import Card from "components/Card";
import { FastField, Formik, Form } from "formik";
import * as Yup from "yup";
import AccountApi from "network/AccountApi";

class LoginScreen extends Component {
  state = {
    isLoading: true,
  };

  _login = async (values) => {
    try {
      const res = await AccountApi.login(values);
      this.props.history.push("/overview");
    } catch (error) {}
  };

  render() {
    const initialValues = {
      username: "admin",
      password: "admin",
    };
    const validationSchema = Yup.object().shape({
      username: Yup.string().required("Tài khoản không được để trống"),
      password: Yup.string().required("Nhập mật khẩu"),
    });
    return (
      <div className="login-page">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log("Submit", values);
            this._login(values);
            // this.props.history.push("/overview");
          }}
          validationSchema={validationSchema}
        >
          {(formikProps) => {
            const { values, errors, touched } = formikProps;
            console.log({ values, errors, touched });
            return (
              <Form className="login-box">
                <Card headerTitle="Đăng nhập" background={true}>
                  <FastField
                    component={InputField}
                    name="username"
                    label="Tài khoản"
                    placeholder="Nhập tài khoản hoặc sdt"
                  />
                  <FastField
                    component={InputField}
                    name="password"
                    label="Mật khẩu"
                    placeholder="Mật khẩu"
                  />
                  <Button type="submit" color="primary">
                    Đăng nhập
                  </Button>
                </Card>
              </Form>
            );
          }}
        </Formik>
      </div>
    );
  }
}

export default LoginScreen;
