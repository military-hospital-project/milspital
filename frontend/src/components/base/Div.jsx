import styled from 'styled-components';

const Division = styled.div`
  position: ${(props) => props.position};
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  text-align: ${(props) => props.textAlign};
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.fontFamily};
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  background-color: ${(props) => props.bgcolor};
  background-image: url(${(props) => props.bgimage});
  background-size: ${(props) => props.bgsize};
  float: ${(props) => props.float};
  font-size: ${(props) => props};
`;

export default function Div({
  position,
  display,
  justifyContent,
  alignItems,
  flexDirection,
  width,
  height,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  left,
  top,
  right,
  bottom,
  color,
  border,
  borderRadius,
  background,
  bgcolor,
  bgimage,
  bgsize,
  children,
  onClick,
  float,
  fontSize,
  fontFamily,
}) {
  return (
    <Division
      position={position}
      display={display}
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexDirection={flexDirection}
      width={width}
      height={height}
      margin={margin}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      left={left}
      top={top}
      right={right}
      bottom={bottom}
      color={color}
      border={border}
      borderRadius={borderRadius}
      background={background}
      bgcolor={bgcolor}
      bgimage={bgimage}
      bgsize={bgsize}
      onClick={onClick}
      float={float}
      fontSize={fontSize}
      fontFamily={fontFamily}
    >
      {children}
    </Division>
  );
}
