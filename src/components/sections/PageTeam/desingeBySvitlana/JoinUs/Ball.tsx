import clsx from 'clsx';
import { motion } from 'framer-motion';

type Props = {
  typeLinkSocial: boolean;
  colorSchemaStars: 'white' | 'purple';
};

function Ball({ typeLinkSocial, colorSchemaStars }: Props) {
  return (
    <motion.div drag className="max-w-max overflow-hidden rounded-full">
      <div
        className={clsx(
          'relative rounded-full',
          !typeLinkSocial &&
            'h-[140px] w-[140px] bg-s-gray lg:h-[248px] lg:w-[248px]'
        )}
      >
        {!typeLinkSocial && (
          <svg
            className={clsx(
              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
              colorSchemaStars === 'white'
                ? 'fill-white'
                : 'fill-s-light-purple'
            )}
            width="68"
            height="68"
            viewBox="0 0 68 68"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.3078 13.4108L49.4457 4.57071L47.9294 17.9357L47.885 18.327L48.2681 18.2358L61.3529 15.1196L53.7993 26.2491L53.5782 26.575L53.9598 26.6722L66.994 29.9938L55.1334 36.3382L54.7862 36.5239L55.0789 36.7873L65.0765 45.7858L51.6261 45.8915L51.2324 45.8946L51.3691 46.2639L56.0398 58.8777L44.0809 52.7207L43.7308 52.5405L43.6802 52.931L41.954 66.2705L34.2262 55.2612L34 54.9389L33.7738 55.2612L26.046 66.2705L24.3198 52.931L24.2692 52.5405L23.9191 52.7207L11.9602 58.8777L16.6309 46.2639L16.7676 45.8946L16.3739 45.8915L2.92351 45.7858L12.9211 36.7873L13.2138 36.5239L12.8666 36.3382L1.00602 29.9938L14.0402 26.6722L14.4218 26.575L14.2007 26.2491L6.64705 15.1196L19.7319 18.2358L20.115 18.327L20.0706 17.9357L18.5543 4.57071L28.6922 13.4108L28.989 13.6696L29.1315 13.3025L34 0.763693L38.8685 13.3025L39.011 13.6696L39.3078 13.4108Z"
              strokeWidth="0.552832"
            />
          </svg>
        )}
        {!typeLinkSocial && (
          <svg
            className={clsx(
              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
              colorSchemaStars !== 'white'
                ? 'fill-white'
                : 'fill-s-light-purple'
            )}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 0L11.5077 3.88307L14.6472 1.14544L14.1777 5.28438L18.2298 4.31935L15.8906 7.76599L19.9271 8.79463L16.2541 10.7594L19.3502 13.546L15.1848 13.5788L16.6312 17.4851L12.9278 15.5784L12.3932 19.7094L10 16.3L7.60684 19.7094L7.07224 15.5784L3.36877 17.4851L4.8152 13.5788L0.649837 13.546L3.74593 10.7594L0.0729113 8.79463L4.1094 7.76599L1.77016 4.31935L5.82233 5.28438L5.35277 1.14544L8.49231 3.88307L10 0Z" />
          </svg>
        )}
      </div>
    </motion.div>
  );
}

export default Ball;
