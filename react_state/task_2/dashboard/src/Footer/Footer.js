import { getFullYear } from '../utils/utils';
import { getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
  )
}

export default Footer;
