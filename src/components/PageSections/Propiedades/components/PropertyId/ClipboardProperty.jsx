import React from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { iconsList } from '@/components/Icons';

const ClipboardProperty = ({ copied, setCopied, queryId }) => {
  const { HiClipboard, HiClipboardCheck } = iconsList;

  return (
    <div className="flex justify-center text-lg my-5 p-2 rounded-lg bg-gray-100">
      <span className="flex items-center text-slate-500">
        Copiar código de propiedad
        <span className="text-slate-500 ml-2 text-2xl cursor-pointer">
          <CopyToClipboard
            text={` ${queryId}`}
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
};

export default ClipboardProperty;
