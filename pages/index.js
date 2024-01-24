import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Auto Spare parts Online in UAE</title>
        <meta name="description" content="New, Used, Genuine, Aftermarket spare parts for any car. Dubai, Ajman, Sharjah, Ras al Khaimah, Abu Dhabi, Palm Jumeirah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://emirates-car.com">Emirates-car.com</a>
        </h1>

        <p className={styles.description}>
          Get started by clicking on the {' '}
          <code className={styles.code}>LINKS BELOW</code>
        </p>

        <div className={styles.grid}>
          <a
            href="https://emirates-car.com/search-by-make/"
            className={styles.card}
          >
            <h2>Car Spare Parts &rarr;</h2>
            <p>
              Find Car Spare parts Online - FORD Chrysler CHRYSLER Citroen
              CITROEN Hillman HILLMAN Chevrolet CHEVROLET Cadillac CADILLAC BMW
              BMW Austin AUSTIN Fairthorpe FAIRTHORPE Fillmore FILLMORE Pontiac
              PONTIAC Studebaker STUDEBAKER Buick BUICK Rambler RAMBLER Plymouth
              PLYMOUTH Volkswagen VOLKSWAGEN Jensen JENSEN Oldsmobile OLDSMOBILE
              Mercury MERCURY Dodge DODGE Shelby SHELBY Porsche PORSCHE Toyota
              TOYOTA Mercedes-Benz MERCEDES-BENZ MG MG Nissan NISSAN Honda HONDA
              Mazda MAZDA Renault RENAULT Audi AUDI Lincoln LINCOLN Lotus LOTUS
              Maserati MASERATI Mitsubishi MITSUBISHI Saab SAAB Subaru SUBARU
              Suzuki SUZUKI Lamborghini LAMBORGHINI Merkur MERKUR Land Rover
              LAND ROVER Acura ACURA Lexus LEXUS Eagle EAGLE Alfa Romeo ALFA
              ROMEO Daihatsu DAIHATSU Geo GEO GMC GMC Hyundai HYUNDAI Infiniti
              INFINITI Isuzu ISUZU Jaguar JAGUAR Jeep JEEP Saturn SATURN Volvo
              VOLVO Hummer HUMMER Kia KIA Holden HOLDEN Corbin CORBIN Daewoo
              DAEWOO Mini MINI Maybach MAYBACH Scion SCION Spyker SPYKER Aston
              Martin ASTON MARTIN Bentley BENTLEY Panoz PANOZ Rolls-Royce
              ROLLS-ROYCE Spyker Cars SPYKER CARS Ferrari FERRARI Morgan MORGAN
              Peugeot PEUGEOT Foose FOOSE Aptera APTERA Smart SMART Bugatti
              BUGATTI Tesla TESLA Ram RAM Fiat FIAT McLaren MCLAREN BYD BYD
              Mobility Ventures LLC MOBILITY VENTURES LLC Pagani PAGANI Roush
              Performance ROUSH PERFORMANCE SRT SRT Genesis GENESIS Karma KARMA
              Koenigsegg KOENIGSEGG RUF Automobile RUF AUTOMOBILE STI STI
              Polestar POLESTAR Kandi KANDI auto spare parts
            </p>
          </a>

          <a
            href="https://emirates-car.com/search-by-cities-in-uae"
            className={styles.card}
          >
            <h2>Automotive spare parts in UAE, saudi arabia &rarr;</h2>
            <p>Find Car Spare parts Online in UAE</p>
          </a>

          <a
            href="https://emirates-car.com/search-by-part-name"
            className={styles.card}
          >
            <h2>Car Parts list &rarr;</h2>
            <p>Order and Buy spare parts from us</p>
          </a>

          <a
            href="https://emirates-car.com/get-in-touch"
            className={styles.card}
          >
            <h2>Get In Touch &rarr;</h2>
            <p>
              Fill out the inquiry form and Submit
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="https://emirates-car.com/img/car-spare-parts.png" alt="emirates auto parts" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
