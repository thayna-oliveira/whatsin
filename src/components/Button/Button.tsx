import * as S from './styled';

type ButtonProps = {
  title: string;
};

export function Button(props: ButtonProps) {
  return (
    <S.Button>
      <S.Icon />
      {props.title}
    </S.Button>
  );
}
