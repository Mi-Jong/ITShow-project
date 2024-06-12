import React from 'react';
import { createPortal } from 'react-dom';
import '../css/Tooltip.css';

<div>
  <p>리액트 포탈을 사용하려고 합니다.</p>
  {createPortal(
    <p>리액트 포탈의 모달 컴포넌트</p>,
    document.getElementById('aside-root')
  )}
</div>