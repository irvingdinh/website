import { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    {
      title:
        'Irving Dinh — Software engineer, designer, and amateur photographer.',
    },
  ];
};

export default function Page() {
  return <p>Lorem ipsum dolor sit amet</p>;
}
