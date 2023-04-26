import React from 'react';
import {
  Page,
  Text,
  Image,
  View,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';

const VistaPdf = ({ poema }) => {
  return (
    <Document>
      <Page size="A4">
        <View>
          <Text>{poema}</Text>
          <Text>Bidata SPA</Text>
          <Image
            src="https://www.greenfoothills.org/wp-content/uploads/2017/11/PDF-icon-1.png"
            alt="img"
          />
        </View>
      </Page>
    </Document>
  );
};

export default VistaPdf;
