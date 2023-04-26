import React, { useState, useEffect } from 'react';
import {
  Page,
  Text,
  Image,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';
import ExchangeRateServices from '@/services/ExchangeRateServices';
import { parseToCLPCurrency, clpToUf } from '@/utils';

const styles = StyleSheet.create({
  page: { backgroundColor: 'white' },
  section: { color: '#000', textAlign: 'center', margin: 30 },
  mainSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
  },
  secondSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'start',
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  header: {
    backgroundColor: 'whitesmoke',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logoImg: {
    height: '60px',
    width: 'auto',
    objectFit: 'cover',
  },
  topInfo: {
    display: 'flex',
    flexDirection: 'row',
  },
  lightFont: {
    fontWeight: 'light',
    color: '#6b7280',
  },
  containerPharagraph: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: '10px',
  },
  lightFontSm: {
    fontSize: 8,
    fontWeight: 'light',
    color: '#6b7280',
  },
  darkFontSm: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#111827',
  },
  lightFontXl: {
    fontSize: 14,
    fontWeight: 'light',
    color: '#6b7280',
  },
  darkFont2Xl: {
    fontSize: 24,
    fontWeight: 1,
    color: '#111827',
  },
  topInfoDetail: {
    marginRight: 10,
    fontSize: 10,
  },
  rightInfoDetail: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    width: '40%',
  },
  image: {
    height: '200px',
    width: 'auto',
  },
  containerPropertiesInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    marginTop: '10px',
  },
  subContainerInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  subContainerInfoDown: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: '10px',
  },
});

const VistaPdf = ({ property }) => {
  const [ufCurrentValue, setUfCurrentValue] = useState(0);
  const {
    id,
    images,
    price,
    surface_m2,
    bedrooms,
    bathrooms,
    status,
    company,
    address,
    commune,
    city,
    title,
    description,
  } = property;

  const getExchangeRateUF = async () => {
    try {
      const response = await ExchangeRateServices.getExchangeRateUF();
      const ufValue = response?.UFs[0]?.Valor;
      const ufValueAsNumber = parseFloat(ufValue.replace(',', '.'));

      setUfCurrentValue(ufValueAsNumber);
    } catch (error) {
      throw error.response;
    }
  };

  useEffect(() => {
    getExchangeRateUF();
  }, [ufCurrentValue]);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.header}>
            <Image
              src="https://res.cloudinary.com/dbrhjc4o5/image/upload/v1682538681/unne-media/logo/logo-unne-pdf_ozphwt.png"
              style={styles.logoImg}
            />

            <View style={styles.topInfo}>
              <Text style={styles.topInfoDetail}>
                <Text style={styles.lightFont}>Código de propiedad:</Text> {id}
              </Text>

              <Text style={styles.topInfoDetail}>
                <Text style={styles.lightFont}>Fecha de creación:</Text>{' '}
                04/26/2023
              </Text>
            </View>
          </View>

          <View style={styles.mainSection}>
            <View>
              <Image
                src={images[0] ?? images[1] ?? images[2]}
                style={styles.image}
              />
            </View>

            <View style={styles.rightInfoDetail}>
              <View style={styles.containerPharagraph}>
                <Text style={styles.lightFontXl}>Desde</Text>
                <Text style={styles.darkFont2Xl}>
                  UF: {clpToUf(price || 0, ufCurrentValue)}
                </Text>
                <Text style={styles.lightFontXl}>
                  {parseToCLPCurrency(price || 0)}
                </Text>
              </View>

              <View style={styles.containerPropertiesInfo}>
                <View style={styles.subContainerInfo}>
                  <Text style={styles.lightFontSm}>Superficie útil</Text>
                  <Text style={styles.darkFontSm}>{surface_m2} m2</Text>
                </View>
                <View>
                  <Text style={styles.lightFontSm}>Dormitorios</Text>
                  <Text style={styles.darkFontSm}>{bedrooms || 0}</Text>
                </View>
              </View>

              <View style={styles.containerPropertiesInfo}>
                <View style={styles.subContainerInfo}>
                  <Text style={styles.lightFontSm}>Baños</Text>
                  <Text style={styles.darkFontSm}>{bathrooms || 0}</Text>
                </View>
                <View>
                  <Text style={styles.lightFontSm}>Fecha de entrega</Text>
                  <Text style={styles.darkFontSm}>No def.</Text>
                </View>
              </View>

              <View style={styles.containerPropertiesInfo}>
                <View style={styles.subContainerInfo}>
                  <Text style={styles.lightFontSm}>Estado del proyecto</Text>
                  <Text style={styles.darkFontSm}>{status || 'Pendiente'}</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.secondSection}>
            <View style={styles.subContainerInfoDown}>
              <Text style={styles.lightFontSm}>Empresa</Text>
              <Text style={styles.darkFontSm}>
                {company || 'Compañía no registrada'}
              </Text>
            </View>

            <View style={styles.subContainerInfoDown}>
              <Text style={styles.lightFontSm}>Ubicación</Text>
              <Text style={styles.darkFontSm}>
                {address || 'Ubicación no registrada'},{' '}
                {commune || 'Comuna no registrada'}
                {city || 'Ciudad no registrada'}
              </Text>
            </View>

            <View style={styles.subContainerInfoDown}>
              <Text style={styles.lightFontSm}>Titulo</Text>
              <Text style={styles.darkFontSm}>
                {title || 'Titulo no registrado'}
              </Text>
            </View>

            <View style={styles.subContainerInfoDown}>
              <Text style={styles.lightFontSm}>Descripción</Text>
              <Text style={styles.darkFontSm}>
                {description || 'Descripción no registrada'}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default VistaPdf;
