import { targetsValues } from '../../../models';
import TargetBlockComponent from './target-block/target-block';

interface Props {
  targetName: string;
}

const TargetInfoComponent = ({ targetName }: Props) => {
  const targetValue = targetsValues.find((v) => v.name === targetName);
  if (!targetName || !targetValue) {
    return <></>;
  }

  return (
    <TargetBlockComponent
      icon={targetValue.icon}
      alt={targetValue.alt}
      text={targetValue.text}
    />
  );
};

export default TargetInfoComponent;
