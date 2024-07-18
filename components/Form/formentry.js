import { Box, Paper } from '@mui/material';
import { TabsBoxX } from '@/components/Form/formtabs';
import MetaInfoFormBlocX from '@/components/Form/metainfoblock';
import FormOptionEntry from '@/sections/module/common/forms/option-entry';
import ToastX from '@/components/essentials/toast';

import {
  ButtonX,
  SubmitButtonX,
  SelectOptionField,
  OptionButtonX,
} from '@/components/Form/UdxFormComponents';

export default function FormEntryX(props) {
  console.log('popupVisible-3' + props.isPopupOpen);
  return (
    <Box
      sx={{ width: '100%' }}
      className="form-wrapper"
      style={{ border: 0, padding: 0 }}
    >
      <form method="POST">
        <TabsBoxX
          tabs={props.tabs}
          contents={props.contents}
          actionButton={
            props.submitForm && (
              <SubmitButtonX
                onClick={props.submitForm}
                label={props.submitButtonLabel}
              />
            )
          }
        />
        <MetaInfoFormBlocX hiddeninputs={props.hiddeninputs} />
      </form>
      {props.isPopupOpen && (
        <FormOptionEntry option={props.optionData} onClose={props.popupClose} />
      )}
      <ToastX
        open={props.snackbarOpen}
        autoHideDuration={6000}
        onClose={props.closeSnackbar}
        message={props.snackbarMessage}
        severity={props.snackbarSeverity}
      />
    </Box>
  );
}
