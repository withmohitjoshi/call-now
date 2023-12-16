import { parsePhoneNumber } from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

const CountryFlag = ({ number }) => {
  if (number.length <= 6) {
    return <></>;
  }
  const phoneNumber = parsePhoneNumber("+" + number);
  if (phoneNumber?.country) {
    return flags[phoneNumber?.country]({ title: phoneNumber?.country });
  } else {
    return <></>;
  }
};

export default CountryFlag;
