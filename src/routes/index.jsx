import Button from './Button';
import Icon from './Icon';
import Input from './Input';
import Layout from './Layout';
import Menu from './Menu';
import AutoFocusNext from './AutoFocusNext';
import AutoComplete from './AutoComplete';
import Progress from './Progress';
import Spin from './Spin';
import Timeline from './Timeline';
import Preload from './Preload';
import Compressor from './Compressor';
import { autoAddPathToChildren } from './routes_helper';

const routes = autoAddPathToChildren(
  [].concat(
    Button,
    Icon,
    Input,
    AutoFocusNext,
    AutoComplete,
    Layout,
    Menu,
    Progress,
    Spin,
    Timeline,
    Preload,
    Compressor,
  ),
);

export default routes;
