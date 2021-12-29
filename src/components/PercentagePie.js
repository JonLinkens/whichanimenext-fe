import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function PercentagePie({ percentage }) {
  return (
    <div>
      <CircularProgressbar value={percentage} text={`${percentage}%`} />;
    </div>
  );
}
