import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon/icon';
import Transition from './components/Transition/transition';
import Input from './components/Input/input';
import { AutoComplete, DataSourceType } from './components/AutoComplete/autoComplete';
import Upload from './components/upload/upload';
library.add(fas);

interface GithubUserProps {
  login?: string;
  html_url?: string;
  avatar_url?: string;
}

const App: React.FC = () => {
  const [show, setShow] = useState(true);
  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const { items } = data || {};
        console.log(data.items);
        const formatItems = items.slice(0, 10).map((item: any) => ({ value: item.login, ...item }));
        console.log(formatItems);
        return formatItems;
      });
  };

  const renderOption = (item: DataSourceType<GithubUserProps>) => {
    return <div>Name: {item.value}</div>;
  };

  return (
    <div style={{ padding: '50px' }}>
      <Button disabled>按钮</Button>
      <Button onClick={() => console.log('111')} size="lg" autoFocus>
        按钮
      </Button>
      <Button size="sm">按钮</Button>
      <Button btnType="danger">按钮</Button>
      <Button className="test" btnType="primary" size="lg">
        按钮
      </Button>
      <Button btnType="link" href="http://www.baidu.com" disabled>
        Link Button
      </Button>
      <Button btnType="link" href="http://www.baidu.com" size="sm" target="_blank">
        Link Button
      </Button>
      <div>---------</div>
      <Menu defaultIndex={'0'} onSelect={(index) => console.log(index)}>
        <MenuItem>menu1</MenuItem>
        <MenuItem disabled>menu2</MenuItem>
        <SubMenu title="Submenu">
          <MenuItem disabled>submenu item1</MenuItem>
          <MenuItem>submenu item2</MenuItem>
        </SubMenu>
        <MenuItem>menu3</MenuItem>
      </Menu>
      <div>---------</div>
      <Menu
        defaultIndex={'0'}
        onSelect={(index) => console.log(index)}
        mode="vertical"
        defaultOpenSubMenus={['2']}
      >
        <MenuItem>menu1</MenuItem>
        <MenuItem disabled>menu2</MenuItem>
        <SubMenu title="Submenu">
          <MenuItem disabled>submenu item1</MenuItem>
          <MenuItem>submenu item2</MenuItem>
        </SubMenu>
        <MenuItem>menu3</MenuItem>
      </Menu>
      <div>---------</div>
      <Icon icon="angle-down" theme="danger" size="2x" />
      <Icon icon="coffee" theme="primary" size="2x" />
      <Icon icon="coffee" theme="secondary" size="2x" />
      <Icon icon="angle-down" theme="dark" size="2x" />
      <Icon icon="coffee" theme="info" size="2x" />
      <Icon icon="coffee" theme="light" size="2x" />
      <Icon icon="coffee" theme="success" size="2x" />
      <Icon icon="angle-down" theme="warning" size="2x" />
      <div>----------</div>
      <Button onClick={() => setShow(!show)}>toggle</Button>
      <Transition in={show} animation="zoom-in-top" timeout={300}>
        <div>
          <div>111</div>
          <div>222</div>
          <div>333</div>
        </div>
      </Transition>
      <Transition in={show} animation="zoom-in-top" timeout={300} wrapper>
        <Button btnType="danger">111</Button>
      </Transition>
      <div>------------</div>
      <Input placeholder="placeholder" icon="coffee" />
      <Input disabled style={{ width: '300px' }} size="sm" />
      <Input placeholder="placeholder" size="lg" icon="coffee" style={{ width: '300px' }} />
      <Input
        placeholder="placeholder"
        size="lg"
        icon="coffee"
        style={{ width: '300px' }}
        prepend="https://"
      />
      <Input placeholder="placeholder" size="lg" style={{ width: '300px' }} append=".com" />
      <div>------------</div>
      <AutoComplete fetchSuggestions={handleFetch} renderOption={renderOption} />
      <div>----------</div>
      <Upload
        action="https://jsonplaceholder.typicode.com/posts/"
        onError={() => console.log('err')}
        onProgress={() => console.log('onProgress')}
        onSuccess={() => console.log('success')}
      />
    </div>
  );
};

export default App;
