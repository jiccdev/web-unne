import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropertiesContext from '@/context/properties/PropertiesContext';
import HeadPage from '@/components/Head/HeadPage';
import Layout from '@/components/Layout/Layout';
import GalleryCarousel from '@/components/GalleryCarousel/GalleryCarousel';
import TopInfoAddress from '@/components/PageSections/Propiedades/components/PropertyId/TopInfoAddress';
import Details from '@/components/PageSections/Propiedades/components/PropertyId/Details';
import SimilarProjects from '@/components/PageSections/Propiedades/components/PropertyId/SimilarProjects';
import Characteristics from '@/components/PageSections/Propiedades/components/PropertyId/Characteristics';
import ReactMap from '@/components/Map/ReactMap';
import { iconsList } from '@/components/Icons';
import VistaWeb from './VistaWeb';
import VistaPdf from './VistaPdf';

import Modal from '@/components/Modal/Modal';

import { PDFViewer } from '@react-pdf/renderer';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const PropiedadId = () => {
  const { contextDataProps } = useContext(PropertiesContext);
  const [
    ,
    ,
    ,
    ,
    propertyId,
    setPropertyId,
    getPropertyById,
    property,
    setProperty,
  ] = contextDataProps;
  const [showModalShare, setShowModalShare] = useState(false);
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [copied, setCopied] = useState(false);

  const { query } = useRouter();
  const queryId = query.propertyId;
  const { FaShare, AiFillPrinter, HiClipboard, HiClipboardCheck } = iconsList;

  const { LngLat } = property;
  const lng = Number(LngLat?.match(/Lng: ([-\d.]+)/)[1]) || -70.64827;
  const lat = Number(LngLat?.match(/Lat: ([-\d.]+)/)[1]) || -33.45694;

  useEffect(() => {
    getPropertyById(queryId, 1, 1);
  }, [queryId]);

  // pdf
  const [poema, setPoema] = useState('Este es un poema');
  const [showWeb, setShowWeb] = useState(false);
  const [showPdf, setShowPdf] = useState(false);

  const renderContent = () => (
    <div className="flex justify-center text-lg my-5 p-2 rounded-lg bg-gray-100">
      <span className="flex items-center text-slate-500">
        Copiar
        <span className="text-slate-500 ml-2 text-2xl cursor-pointer">
          <CopyToClipboard
            text={`https://unne.pa/propiedades`}
            onCopy={() => {
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 3000);
            }}
          >
            {!copied ? (
              <HiClipboard className="text-slate-500" />
            ) : (
              <HiClipboardCheck className="text-green-600" />
            )}
          </CopyToClipboard>
        </span>
      </span>
    </div>
  );

  return (
    <Fragment>
      <HeadPage>
        <title>Unne | Propiedad {queryId || 'Propiedad no encontrada'}</title>
      </HeadPage>

      <Layout>
        {showWeb && <VistaWeb poema={poema} />}
        {showPdf && (
          <PDFViewer
            style={{
              width: '100%',
              height: '90vh',
            }}
          >
            <VistaPdf poema={poema} />
          </PDFViewer>
        )}

        <div className="my-10 px-4 xl:px-32">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-auto bg-red md:grid-cols-reverse">
            <div className="sm:col-span-6 col-span-3 xl:col-span-3 bg-gray-50 max-h-auto order-2 xl:order-1">
              <div className="flex justify-between items-center py-2.5 px-5 text-xs xl:text-sm text-gray-500">
                <TopInfoAddress property={property} />
                <div className="flex flex-row">
                  <span
                    onClick={() => setShowModalShare(true)}
                    className="flex items-center hover:text-blue-500 cursor-pointer"
                  >
                    <FaShare className="mr-1" />
                    Compartir
                  </span>
                  <span className="mx-4 text-gray-200">|</span>
                  <span
                    onClick={() => setShowPdf(!showPdf)}
                    className="flex items-center hover:text-blue-500 cursor-pointer"
                  >
                    <AiFillPrinter className="mr-1" />
                    Imprimir PDF
                  </span>
                </div>
              </div>
              <GalleryCarousel items={property} />
              <Characteristics property={property} />
            </div>
            <div className="sm:col-span-6 col-span-3 xl:col-span-1 bg-white h-auto order-1 xl:order-2">
              <Details property={property} />
              {/* <SimilarProjects /> */}
            </div>
          </div>

          {/* REACT MAP */}
          <div>
            <ReactMap
              longitudeProp={lng}
              latitudeProp={lat}
              property={property}
            />
          </div>
        </div>

        <Modal
          renderTrigger={() => null}
          isOpenProp={showModalShare}
          renderContent={renderContent}
          contentExtraClass="max-w-2xl"
          onCloseModal={() => {
            setShowModalShare(false);
          }}
          modalTitle="Compartir Propiedad"
        />
      </Layout>
    </Fragment>
  );
};

export default PropiedadId;
