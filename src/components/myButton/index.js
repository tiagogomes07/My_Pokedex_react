import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
  color: 'default',
  height: 25,
  width:150,
  padding: '0 30px',
});

export default function ButtonStyled(props) {
  return <div>
             <MyButton   
             variant="contained">
              {props.textButton}
            </MyButton>
          </div>
}