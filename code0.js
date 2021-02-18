gdjs.TestCode = {};
gdjs.TestCode.GDPlayerObjects1= [];
gdjs.TestCode.GDPlayerObjects2= [];
gdjs.TestCode.GDPlayerObjects3= [];
gdjs.TestCode.GDGrassObjects1= [];
gdjs.TestCode.GDGrassObjects2= [];
gdjs.TestCode.GDGrassObjects3= [];
gdjs.TestCode.GDJumpthrouObjects1= [];
gdjs.TestCode.GDJumpthrouObjects2= [];
gdjs.TestCode.GDJumpthrouObjects3= [];
gdjs.TestCode.GDbuildingObjects1= [];
gdjs.TestCode.GDbuildingObjects2= [];
gdjs.TestCode.GDbuildingObjects3= [];
gdjs.TestCode.GDdooraObjects1= [];
gdjs.TestCode.GDdooraObjects2= [];
gdjs.TestCode.GDdooraObjects3= [];
gdjs.TestCode.GDwallaObjects1= [];
gdjs.TestCode.GDwallaObjects2= [];
gdjs.TestCode.GDwallaObjects3= [];
gdjs.TestCode.GDcoinObjects1= [];
gdjs.TestCode.GDcoinObjects2= [];
gdjs.TestCode.GDcoinObjects3= [];
gdjs.TestCode.GDScoreObjects1= [];
gdjs.TestCode.GDScoreObjects2= [];
gdjs.TestCode.GDScoreObjects3= [];
gdjs.TestCode.GDSkyObjects1= [];
gdjs.TestCode.GDSkyObjects2= [];
gdjs.TestCode.GDSkyObjects3= [];
gdjs.TestCode.GDCloudsObjects1= [];
gdjs.TestCode.GDCloudsObjects2= [];
gdjs.TestCode.GDCloudsObjects3= [];
gdjs.TestCode.GDLeftbottonObjects1= [];
gdjs.TestCode.GDLeftbottonObjects2= [];
gdjs.TestCode.GDLeftbottonObjects3= [];
gdjs.TestCode.GDRightBottonObjects1= [];
gdjs.TestCode.GDRightBottonObjects2= [];
gdjs.TestCode.GDRightBottonObjects3= [];
gdjs.TestCode.GDUpBottonObjects1= [];
gdjs.TestCode.GDUpBottonObjects2= [];
gdjs.TestCode.GDUpBottonObjects3= [];
gdjs.TestCode.GDDownBottonObjects1= [];
gdjs.TestCode.GDDownBottonObjects2= [];
gdjs.TestCode.GDDownBottonObjects3= [];
gdjs.TestCode.GDJumpBottonObjects1= [];
gdjs.TestCode.GDJumpBottonObjects2= [];
gdjs.TestCode.GDJumpBottonObjects3= [];

gdjs.TestCode.conditionTrue_0 = {val:false};
gdjs.TestCode.condition0IsTrue_0 = {val:false};
gdjs.TestCode.condition1IsTrue_0 = {val:false};
gdjs.TestCode.condition2IsTrue_0 = {val:false};


gdjs.TestCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects2);

gdjs.TestCode.condition0IsTrue_0.val = false;
gdjs.TestCode.condition1IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.TestCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TestCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.TestCode.condition1IsTrue_0.val = true;
        gdjs.TestCode.GDPlayerObjects2[k] = gdjs.TestCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDPlayerObjects2.length = k;}}
if (gdjs.TestCode.condition1IsTrue_0.val) {
/* Reuse gdjs.TestCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects2[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects2);

gdjs.TestCode.condition0IsTrue_0.val = false;
gdjs.TestCode.condition1IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.TestCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TestCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.TestCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.TestCode.condition1IsTrue_0.val = true;
        gdjs.TestCode.GDPlayerObjects2[k] = gdjs.TestCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDPlayerObjects2.length = k;}}
if (gdjs.TestCode.condition1IsTrue_0.val) {
/* Reuse gdjs.TestCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects2);

gdjs.TestCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TestCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.TestCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.TestCode.condition0IsTrue_0.val = true;
        gdjs.TestCode.GDPlayerObjects2[k] = gdjs.TestCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.TestCode.GDPlayerObjects2.length = k;}if (gdjs.TestCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TestCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects1);

gdjs.TestCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TestCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.TestCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.TestCode.condition0IsTrue_0.val = true;
        gdjs.TestCode.GDPlayerObjects1[k] = gdjs.TestCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.TestCode.GDPlayerObjects1.length = k;}if (gdjs.TestCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TestCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


};gdjs.TestCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.TestCode.GDPlayerObjects1.length !== 0 ? gdjs.TestCode.GDPlayerObjects1[0] : null), true, "", 0);
}}

}


};gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.TestCode.GDPlayerObjects1});gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDcoinObjects1Objects = Hashtable.newFrom({"coin": gdjs.TestCode.GDcoinObjects1});gdjs.TestCode.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.TestCode.GDScoreObjects2);
{for(var i = 0, len = gdjs.TestCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDScoreObjects2[i].setString("Score:" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("coin"), gdjs.TestCode.GDcoinObjects1);

gdjs.TestCode.condition0IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDPlayerObjects1Objects, gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDcoinObjects1Objects, false, runtimeScene, false);
}if (gdjs.TestCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TestCode.GDcoinObjects1 */
{for(var i = 0, len = gdjs.TestCode.GDcoinObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDcoinObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


};gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.TestCode.GDPlayerObjects1});gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDdooraObjects1Objects = Hashtable.newFrom({"doora": gdjs.TestCode.GDdooraObjects1});gdjs.TestCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("doora"), gdjs.TestCode.GDdooraObjects1);

gdjs.TestCode.condition0IsTrue_0.val = false;
gdjs.TestCode.condition1IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDPlayerObjects1Objects, gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDdooraObjects1Objects, false, runtimeScene, false);
}if ( gdjs.TestCode.condition0IsTrue_0.val ) {
{
gdjs.TestCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 10;
}}
if (gdjs.TestCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDRightBottonObjects2Objects = Hashtable.newFrom({"RightBotton": gdjs.TestCode.GDRightBottonObjects2});gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDUpBottonObjects2Objects = Hashtable.newFrom({"UpBotton": gdjs.TestCode.GDUpBottonObjects2});gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDLeftbottonObjects2Objects = Hashtable.newFrom({"Leftbotton": gdjs.TestCode.GDLeftbottonObjects2});gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDDownBottonObjects2Objects = Hashtable.newFrom({"DownBotton": gdjs.TestCode.GDDownBottonObjects2});gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDJumpBottonObjects1Objects = Hashtable.newFrom({"JumpBotton": gdjs.TestCode.GDJumpBottonObjects1});gdjs.TestCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RightBotton"), gdjs.TestCode.GDRightBottonObjects2);

gdjs.TestCode.condition0IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDRightBottonObjects2Objects, runtimeScene, true, false);
}if (gdjs.TestCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects2[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("UpBotton"), gdjs.TestCode.GDUpBottonObjects2);

gdjs.TestCode.condition0IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDUpBottonObjects2Objects, runtimeScene, true, false);
}if (gdjs.TestCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateUpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leftbotton"), gdjs.TestCode.GDLeftbottonObjects2);

gdjs.TestCode.condition0IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDLeftbottonObjects2Objects, runtimeScene, true, false);
}if (gdjs.TestCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DownBotton"), gdjs.TestCode.GDDownBottonObjects2);

gdjs.TestCode.condition0IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDDownBottonObjects2Objects, runtimeScene, true, false);
}if (gdjs.TestCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateDownKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("JumpBotton"), gdjs.TestCode.GDJumpBottonObjects1);

gdjs.TestCode.condition0IsTrue_0.val = false;
{
gdjs.TestCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TestCode.mapOfGDgdjs_46TestCode_46GDJumpBottonObjects1Objects, runtimeScene, true, false);
}if (gdjs.TestCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.TestCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.TestCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.TestCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs.TestCode.eventsList5 = function(runtimeScene) {

{


gdjs.TestCode.eventsList0(runtimeScene);
}


{


gdjs.TestCode.eventsList1(runtimeScene);
}


{


gdjs.TestCode.eventsList2(runtimeScene);
}


{


gdjs.TestCode.eventsList3(runtimeScene);
}


{


gdjs.TestCode.eventsList4(runtimeScene);
}


};

gdjs.TestCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TestCode.GDPlayerObjects1.length = 0;
gdjs.TestCode.GDPlayerObjects2.length = 0;
gdjs.TestCode.GDPlayerObjects3.length = 0;
gdjs.TestCode.GDGrassObjects1.length = 0;
gdjs.TestCode.GDGrassObjects2.length = 0;
gdjs.TestCode.GDGrassObjects3.length = 0;
gdjs.TestCode.GDJumpthrouObjects1.length = 0;
gdjs.TestCode.GDJumpthrouObjects2.length = 0;
gdjs.TestCode.GDJumpthrouObjects3.length = 0;
gdjs.TestCode.GDbuildingObjects1.length = 0;
gdjs.TestCode.GDbuildingObjects2.length = 0;
gdjs.TestCode.GDbuildingObjects3.length = 0;
gdjs.TestCode.GDdooraObjects1.length = 0;
gdjs.TestCode.GDdooraObjects2.length = 0;
gdjs.TestCode.GDdooraObjects3.length = 0;
gdjs.TestCode.GDwallaObjects1.length = 0;
gdjs.TestCode.GDwallaObjects2.length = 0;
gdjs.TestCode.GDwallaObjects3.length = 0;
gdjs.TestCode.GDcoinObjects1.length = 0;
gdjs.TestCode.GDcoinObjects2.length = 0;
gdjs.TestCode.GDcoinObjects3.length = 0;
gdjs.TestCode.GDScoreObjects1.length = 0;
gdjs.TestCode.GDScoreObjects2.length = 0;
gdjs.TestCode.GDScoreObjects3.length = 0;
gdjs.TestCode.GDSkyObjects1.length = 0;
gdjs.TestCode.GDSkyObjects2.length = 0;
gdjs.TestCode.GDSkyObjects3.length = 0;
gdjs.TestCode.GDCloudsObjects1.length = 0;
gdjs.TestCode.GDCloudsObjects2.length = 0;
gdjs.TestCode.GDCloudsObjects3.length = 0;
gdjs.TestCode.GDLeftbottonObjects1.length = 0;
gdjs.TestCode.GDLeftbottonObjects2.length = 0;
gdjs.TestCode.GDLeftbottonObjects3.length = 0;
gdjs.TestCode.GDRightBottonObjects1.length = 0;
gdjs.TestCode.GDRightBottonObjects2.length = 0;
gdjs.TestCode.GDRightBottonObjects3.length = 0;
gdjs.TestCode.GDUpBottonObjects1.length = 0;
gdjs.TestCode.GDUpBottonObjects2.length = 0;
gdjs.TestCode.GDUpBottonObjects3.length = 0;
gdjs.TestCode.GDDownBottonObjects1.length = 0;
gdjs.TestCode.GDDownBottonObjects2.length = 0;
gdjs.TestCode.GDDownBottonObjects3.length = 0;
gdjs.TestCode.GDJumpBottonObjects1.length = 0;
gdjs.TestCode.GDJumpBottonObjects2.length = 0;
gdjs.TestCode.GDJumpBottonObjects3.length = 0;

gdjs.TestCode.eventsList5(runtimeScene);
return;

}

gdjs['TestCode'] = gdjs.TestCode;
