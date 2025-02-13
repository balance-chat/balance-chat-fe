/** @jsxImportSource @emotion/react */

import { title, versus } from './Header.css';
import Option from '../Option/Option';

function Header() {
  return (
    <div>
      <div css={title}>
        <p>둘 중 같이 밥 먹기 싫은 사람은?</p>
      </div>
      <div css={versus}>
        <div style={{ width: '40%' }}>
          <Option
            title="쩝쩝거리는 사람이 더 싫다"
            count={40}
            isSelected={false}
          />
        </div>
        <div style={{ width: '60%' }}>
          <Option
            title="식탐 많은 사람이 더 싫다"
            count={60}
            isSelected={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
