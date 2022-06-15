import CheckBox from "./checkBox";
import RadioButton from "./radioButton";
import Text from "./text";
import Select from "./select";
import Date from "./date";
import Masked from "./masked";
import Decimal from "./decimal";
import MultiSelect from "./multiSelect";

const Input = Text;

Input.CheckBox = CheckBox;
Input.RadioButton = RadioButton;
Input.Select = Select;
Input.MultiSelect = MultiSelect;
Input.Date = Date;
Input.Masked = Masked;
Input.Decimal = Decimal;
export default Input;
