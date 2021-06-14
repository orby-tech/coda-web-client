import RowComponent from '../row/row';

const Header = () => (
  <thead>
    <RowComponent
      target="Target"
      countOfDays="Count of Days"
      subject="Subject"
      lastSendDate="Last send date"
    />
  </thead>
);

export default Header;
