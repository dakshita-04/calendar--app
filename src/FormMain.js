import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  useRef,
} from "react";
import {
  Form,
  SimpleItem,
  Label,
  GroupItem,
  ColCountByScreen,
  Item,
  EmptyItem,
} from "devextreme-react/form";

import TextBox from "devextreme-react/text-box";
import notify from "devextreme/ui/notify";
import "devextreme-react/text-area";
import "devextreme/dist/css/dx.light.css";
import Button from "devextreme-react/button";
import TextArea from "devextreme-react/text-area";
import Validator, {
  RequiredRule,
  NumericRule,
  EmailRule,
  StringLengthRule,
  PatternRule,
  RangeRule,
} from "devextreme-react/validator";
import { Popup } from "devextreme-react/popup";
import ValidationGroup from "devextreme-react/validation-group";

const FormMain = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [addGuestEmail, setAddGuestEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [enterOtp, setEnterOtp] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [subject, setSubject] = useState("");

  const namePattern = /^[^0-9]+$/;
  const phonePattern = /^[02-9]\d{9}$/;
  const phoneRules = {
    X: /[02-9]/,
  };

  const scheduleEvent = async (e) => {
    // e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phone === "" ||
      companyName === "" ||
      subject === ""
    ) {
      notify(
        {
          message: "Please fill all the fields",
          width: 300,
          // shading: true,
          // position: "center",
        },
        "error",
        500
      );
    } else {
      notify(
        {
          message:
            "Thanks for Scheduling a Meeting with us. You will receive a mail Shortly.",
          width: 600,
          shading: true,
          position: "center",
        },
        "success",
        1400
      );
      refreshPage();
    }
  };

  function refreshPage() {
    setTimeout(window.location.reload(true), 1500);
  }
  return (
    <React.Fragment>
      <div className="long-title">
        <h3>Enter the Details</h3>
      </div>
      <ValidationGroup>
        <Form
          colCount={2}
          labelMode="floating"
          labelLocation="left"
          // onContentReady={validateForm}
          //label="Select the"
        >
          <GroupItem
          //caption="Enter the Following Fields"
          //style={{ padding: "20px", backgroundColor: "black" }}
          >
            <TextBox
              label="First Name"
              labelMode="floating"
              defaultValue={firstName}
              onValueChanged={(e) => {
                setFirstName(e.value);
                console.log(e.value);
              }}
              height={50}
            >
              <Validator>
                <RequiredRule message="Name is required" />
                <PatternRule
                  message="Do not use digits in the Name"
                  pattern={namePattern}
                />
                <StringLengthRule
                  message="Name must have at least 2 symbols"
                  min={2}
                />
              </Validator>
            </TextBox>

            <br />
            <TextBox
              label="Email Address"
              labelMode="floating"
              defaultValue={email}
              onValueChanged={(e) => {
                setEmail(e.value);
                console.log(e.value);
              }}
              height={50}
            >
              <Validator>
                <RequiredRule message="Email is required" />
                <EmailRule message="Email is invalid" />
              </Validator>
            </TextBox>

            <br />
            <TextBox
              label="Phone Number"
              labelMode="floating"
              mask="+1 (X00) 000-0000"
              maskInvalidMessage="The phone must have a correct phone format"
              validationMessagePosition="left"
              maskRules={phoneRules}
              defaultValue={phone}
              onValueChanged={(e) => {
                setPhone(e.value);
                console.log(e.value);
              }}
              height={50}
            >
              <Validator>
                <PatternRule
                  message="The phone must have a correct USA phone format"
                  pattern={phonePattern}
                />
              </Validator>
            </TextBox>
            <br />
            <TextBox
              label="Company Name"
              labelMode="floating"
              defaultValue={companyName}
              onValueChanged={(e) => {
                setCompanyName(e.value);
                console.log(e.value);
              }}
              height={50}
            >
              <Validator>
                <RequiredRule message="Company Name is required" />
                <StringLengthRule
                  message="Company Name must have at least 3 symbols"
                  min={3}
                />
              </Validator>
            </TextBox>

            <br />
          </GroupItem>
          <GroupItem
            caption=""
            //style={{ padding: "20px", backgroundColor: "black" }}
          >
            <TextBox
              label="Last Name"
              labelMode="floating"
              defaultValue={lastName}
              onValueChanged={(e) => {
                setLastName(e.value);
                console.log(e.value);
              }}
              height={50}
            >
              <Validator>
                <RequiredRule message="Name is required" />
                <PatternRule
                  message="Do not use digits in the Name"
                  pattern={namePattern}
                />
                <StringLengthRule
                  message="Name must have at least 2 symbols"
                  min={2}
                />
              </Validator>
            </TextBox>

            <br />
            <TextBox
              label="Add Guest Email(s)"
              labelMode="floating"
              defaultValue={addGuestEmail}
              onValueChanged={(e) => {
                setAddGuestEmail(e.value);
                console.log(e.value);
              }}
              height={50}
            >
              <Validator>
                <RequiredRule message="Email is required" />
                <EmailRule message="Email is invalid" />
              </Validator>
            </TextBox>
            <br />
            <TextBox
              label="Enter OTP"
              labelMode="floating"
              defaultValue={enterOtp}
              onValueChanged={(e) => {
                setEnterOtp(e.value);
                console.log(e.value);
              }}
              height={50}
            >
              <Validator>
                <StringLengthRule message="OTP must contain 6 digits" max={6} />
                <NumericRule message="OTP contains only Numbers" />
              </Validator>
            </TextBox>
            <br />
            <TextBox
              label="Subject for Scheduling this Interview with us"
              labelMode="floating"
              defaultValue={subject}
              onValueChanged={(e) => {
                setSubject(e.value);
                console.log(e.value);
              }}
              height={50}
            >
              <Validator>
                <RequiredRule message="Subject is required" />
                <StringLengthRule
                  message="Subject must have at least 4 symbols"
                  min={4}
                />
              </Validator>
            </TextBox>

            <br />
          </GroupItem>
        </Form>
      </ValidationGroup>
      <Button
        width={160}
        text="Schedule Event"
        type="default"
        stylingMode="contained"
        onClick={scheduleEvent}
        style={{marginLeft:"200px",fontSize:"15px",marginTop:"50px",marginBottom:"50px"}}
      ></Button>
    </React.Fragment>
  );
};

export default FormMain;
