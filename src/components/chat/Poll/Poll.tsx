/** @jsxImportSource @emotion/react */

import { Option } from '@/types/poll.type';
import OptionBar from '../OptionBar/OptionBar';

interface Props {
  options: Option[];
}

function Poll({ options }: Props) {
  return (
    <div>
      {options.map((option) => (
        <OptionBar {...option} />
      ))}
    </div>
  );
}

export default Poll;
