	// �齱��ȡ�����ܳ�ʼ��
	amsCfg_429551 = {
		'iAMSActivityId' : '134552', // AMS���
		'activityId' : '196498', // ģ��ʵ����
		'onBeginGetGiftEvent' : function(){
			return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
		},
		'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
			alert(callbackObj.sMsg);
		},
		'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
			var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
			if(packageLen && packageLen.length > 1){
				LotteryManager.alert(callbackObj.sMsg);
				return;
			}
		
			//1��ʵ��
			if((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1){
				/*
				 * 0��������Ϸ��Ʒ
				 * 1��ʵ����Ʒ����Ҫ��д�����ջ���Ϣ
				 * 2��cdkey
				 */
				LotteryManager.alert("��ϲ������� " + callbackObj.sPackageName + " ! ����׼ȷ��д������Ϣ���ٷ����й�����Ա��ϵ����");
				return;
			}
			//2��cdkey
			if(callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey){
				// �µĴ���
				if(callbackObj.sPackageCDkey){
					LotteryManager.alert('����õ�cdkeyΪ��' + callbackObj.sPackageCDkey + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageCDkey+'\'); alert(\'���Ƴɹ���\');">');
					return;
				}else{
					LotteryManager.alert('����õ�cdkeyΪ��' + callbackObj.sPackageOtherInfo + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageOtherInfo+'\'); alert(\'���Ƴɹ���\');">');
					return;
				}
				
			}
			
			LotteryManager.alert(callbackObj.sMsg);
		}
	};