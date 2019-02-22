import React from 'react';

import styles from './Measure.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Measure({ className, ...props }: Props) {
  return <div className={`${styles.root} ${className}`} {...props} />;
}
