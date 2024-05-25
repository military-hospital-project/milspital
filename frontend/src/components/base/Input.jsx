import styled from 'styled-components';

const InputStyle = styled.input`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin || 0};
  margin-top: ${(props) => props.marginTop};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  padding: ${(props) => props.padding};
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
  outline: none;
`;

export default function Input({
  display,
  justifyContent,
  width,
  height,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  color,
  border,
  borderRadius,
  background,
  bgcolor,
  bgimage,
  bgsize,
  float,
  fontSize,
  fontFamily,
  onChange,
  placeholder,
  maxLength,
}) {
  return (
    <InputStyle
      display={display}
      justifyContent={justifyContent}
      width={width}
      height={height}
      margin={margin}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      padding={padding}
      color={color}
      border={border}
      borderRadius={borderRadius}
      background={background}
      bgcolor={bgcolor}
      bgimage={bgimage}
      bgsize={bgsize}
      float={float}
      fontSize={fontSize}
      fontFamily={fontFamily}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
    ></InputStyle>
  );
}
