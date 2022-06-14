/**
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import LogUtil from '../../../../../../../../common/utils/src/main/ets/default/baseUtil/LogUtil';
import ConfigData from '../../../../../../../../common/utils/src/main/ets/default/baseUtil/ConfigData';
import nfcController from '@ohos.nfc.controller';

export class NfcModel {
  private isNfcOpen: boolean;
  private TAG = ConfigData.TAG + 'NfcModel ';

  openNfc(): boolean {
    let enableNfc = nfcController.openNfc()
    LogUtil.info(this.TAG + enableNfc)
    return enableNfc;
  }

  closeNfc(): boolean {
    let disableNfc = nfcController.closeNfc()
    LogUtil.info(this.TAG + disableNfc)
    return disableNfc;
  }
}

let nfcModel = new NfcModel();
export default nfcModel as NfcModel;