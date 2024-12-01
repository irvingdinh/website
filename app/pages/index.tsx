import { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import clsx from 'clsx';

import { Container } from '~/components/Container';
import { GitHubIcon, LinkedInIcon } from '~/components/Icon';
import { Layout } from '~/components/Layout';

export const meta: MetaFunction = () => {
  return [
    {
      title:
        'Irving Dinh — Software engineer, designer, and amateur photographer.',
    },
    {
      property: 'og:title',
      content:
        'Irving Dinh — Software engineer, designer, and amateur photographer.',
    },
    {
      name: 'description',
      content: 'Software engineer, designer, and amateur photographer.',
    },
  ];
};

export default function Page() {
  return (
    <Layout>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Software engineer, designer, and amateur photographer.
          </h1>

          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Irving, a software engineer and designer based in Ho Chi Minh
            City. Beside the full-time job at Axon, I’m also the co-founder of a
            small studio, where we develop apps that help regular people to
            enjoy the technology on their own terms.
          </p>

          <div className="mt-6 flex gap-6">
            <SocialLink
              to="https://github.com/irvingdinh"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
              target="_blank"
            />

            <SocialLink
              to="https://linkedin.com/in/irvingdinh"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
              target="_blank"
            />
          </div>
        </div>
      </Container>

      <Photos />
    </Layout>
  );
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

function Photos() {
  const rotations = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    'rotate-2',
    '-rotate-2',
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[
          'https://irving.dev/api/files/pbc_2708086759/2e25a2jl6bps720/featured_1_jmxrrk2yp1.jpeg?thumb=600x0',
          'https://irving.dev/api/files/pbc_2708086759/o4fe7mmyltt1390/featured_2_ena06q7ui2.jpeg?thumb=600x0',
          'https://irving.dev/api/files/pbc_2708086759/630sfhp5w5rtcrt/featured_3_xg4hnm9e5y.jpeg?thumb=600x0',
          'https://irving.dev/api/files/pbc_2708086759/411ne4i1kc3h67d/featured_4_c1udgv6n7e.jpeg?thumb=600x0',
          'https://irving.dev/api/files/pbc_2708086759/778ew36paw3p25v/featured_5_0ott46wawu.jpeg?thumb=600x0',
        ].map((image, imageIndex) => (
          <div
            key={image}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <img
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
