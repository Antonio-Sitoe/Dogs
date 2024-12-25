'use client';

import React from 'react';
import styles from './conta-estatisticas.module.css';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

type GraphData = {
  x: string;
  y: number;
};

export default function ContaEstatisticas({ data, total }: { data: GraphData[], total: number }) {

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={styles.graphItem}>
        <VictoryPie
          data={data}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333',
            },
          }}
        />
      </div>
      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar alignment="start" data={data}></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
}
