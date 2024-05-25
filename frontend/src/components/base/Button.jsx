import styled from 'styled-components';

const Btn = styled.button`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  margin: ${(props) => props.$margin};
  border: ${(props) => props.border};
  border-bottom: ${(props) => props.borderBottom};
  border-radius: ${(props) => props.borderRadius};
  text-align: center;
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  background-color: ${(props) => props.$backgroundColor};
  float: ${(props) => props.float};
  font-size: ${(props) => props};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor};
    color: ${(props) => props.hoverColor};
    border: ${(props) => props.hoverBorder};
    transition: 0.5s;
  }
`;

export default function Button({
  width,
  height,
  margin,
  color,
  border,
  borderBottom,
  borderRadius,
  background,
  backgroundColor,
  hoverBackgroundColor,
  hoverColor,
  hoverBorder,
  name,
  onClick,
  float,
  fontSize,
}) {
  return (
    <Btn
      width={width}
      height={height}
      margin={margin}
      color={color}
      border={border}
      borderBottom={borderBottom}
      borderRadius={borderRadius}
      background={background}
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
      hoverColor={hoverColor}
      hoverBorder={hoverBorder}
      onClick={onClick}
      float={float}
      fontSize={fontSize}
    >
      {name}
    </Btn>
  );
}
