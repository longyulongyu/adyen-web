import { h } from 'preact';
import Voucher from '../../../internal/Voucher';

import useCoreContext from '../../../../core/Context/useCoreContext';
import { DokuVoucherResultProps } from '../../types';
import useImage from '../../../../core/Context/useImage';

const DokuVoucherResult = (props: DokuVoucherResultProps) => {
    const { reference, expiresAt, instructionsUrl, shopperName, merchantName, totalAmount, paymentMethodType } = props;
    const { i18n } = useCoreContext();
    const getImage = useImage();

    return (
        <Voucher
            paymentMethodType={paymentMethodType}
            reference={reference}
            introduction={i18n.get('voucher.introduction.doku')}
            imageUrl={getImage({})(paymentMethodType)}
            instructionsUrl={instructionsUrl}
            amount={totalAmount && i18n.amount(totalAmount.value, totalAmount.currency)}
            voucherDetails={[
                { label: i18n.get('voucher.expirationDate'), value: i18n.date(expiresAt) },
                { label: i18n.get('voucher.shopperName'), value: shopperName },
                { label: i18n.get('voucher.merchantName'), value: merchantName }
            ]}
            copyBtn
        />
    );
};

export default DokuVoucherResult;
