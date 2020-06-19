import React from 'react'
//import _ from 'lodash'
import ItemForm from './ItemForm'

import styles from './tabs.module.scss'

const Amenities = ({ setForm, formData }) => {
    const { general, features, community } = formData

    return (
        <div className={styles.details_form_container}>
            <div className={styles.details_form_checks_container}>
                <div className={styles.details_form_checks_tag}>
                    <p>General</p>
                </div>
                <div className={styles.details_form_checks_checks}>

                    <ItemForm label="Electricity"
                        name="general.electricity"
                        id="GeneralElectricity"
                        htmlFor="GeneralElectricity"
                        checked={general.electricity}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="water"
                        name="general.water"
                        id="GeneralWater"
                        htmlFor="GeneralWater"
                        checked={general.water}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="internet"
                        name="general.internet"
                        id="GeneralInternet"
                        htmlFor="GeneralInternet"
                        checked={general.internet}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Hot Water Gas"
                        name="general.hot_water.gas"
                        id="GeneralHotWaterGas"
                        htmlFor="GeneralHotWaterGas"
                        checked={general.hot_water.gas}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Hot Water Electric"
                        name="general.hot_water.electric"
                        id="GeneralHotWaterElectric"
                        htmlFor="GeneralHotWaterElectric"
                        checked={general.hot_water.electric}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="cable"
                        name="general.cable"
                        id="GeneralCable"
                        htmlFor="GeneralCable"
                        checked={general.cable}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="satellite"
                        name="general.satellite"
                        id="GeneralSatellite"
                        htmlFor="GeneralSatellite"
                        checked={general.satellite}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Central Air"
                        name="general.central_air"
                        id="GeneralCentralAir"
                        htmlFor="GeneralCentralAir"
                        checked={general.central_air}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="central_vac"
                        name="general.central_vac"
                        id="GeneralCentralVac"
                        htmlFor="GeneralCentralVac"
                        checked={general.central_vac}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Air Wall Unit"
                        name="general.air_wall_unit"
                        id="GeneralairWallUnit"
                        htmlFor="GeneralairWallUnit"
                        checked={general.air_wall_unit}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="heating"
                        name="general.heating"
                        id="GeneralHeating"
                        htmlFor="GeneralHeating"
                        checked={general.heating}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Celling Fans"
                        name="general.celling_fans"
                        id="GeneralCellingFans"
                        htmlFor="GeneralCellingFans"
                        checked={general.celling_fans}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm
                        label="Other"
                        name="general.other"
                        value={general.other}
                        onChange={setForm}
                    />
                </div>
            </div>

            <div className={styles.details_form_checks_container}>
                <div className={styles.details_form_checks_tag}>
                    <p>Features</p>
                </div>
                <div className={styles.details_form_checks_checks}>

                    <ItemForm label="Alarm"
                        name="features.alarm"
                        id="FeaturesAlarm"
                        htmlFor="FeaturesAlarm"
                        checked={features.alarm}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="cameras"
                        name="features.cameras"
                        id="FeaturesCameras"
                        htmlFor="FeaturesCameras"
                        checked={features.cameras}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Gas Fireplace"
                        name="features.gas_fireplace"
                        id="FeaturesGasFireplace"
                        htmlFor="FeaturesGasFireplace"
                        checked={features.gas_fireplace}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Wood Fireplace"
                        name="features.wood_fireplace"
                        id="FeaturesWoodFireplace"
                        htmlFor="FeaturesWoodFireplace"
                        checked={features.wood_fireplace}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Skylights"
                        name="features.skylights"
                        id="FeaturesSkylights"
                        htmlFor="FeaturesSkylights"
                        checked={features.skylights}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Water Softener"
                        name="features.water_softener"
                        id="FeaturesWaterSoftener"
                        htmlFor="FeaturesWaterSoftener"
                        checked={features.water_softener}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Sprinkler System"
                        name="features.sprinkler_system"
                        id="FeaturesSprinklerSystem"
                        htmlFor="FeaturesSprinklerSystem"
                        checked={features.sprinkler_system}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Open Deck"
                        name="features.open_deck"
                        id="FeaturesOpenDeck"
                        htmlFor="FeaturesOpenDeck"
                        checked={features.open_deck}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Balcony"
                        name="features.balcony"
                        id="FeaturesBalcony"
                        htmlFor="FeaturesBalcony"
                        checked={features.balcony}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Covered Terrace"
                        name="features.covered_terrace"
                        id="FeaturesCoveredTerrace"
                        htmlFor="FeaturesCoveredTerrace"
                        checked={features.covered_terrace}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Gazebo Rancho"
                        name="features.gazebo_rancho"
                        id="FeaturesGazeboRancho"
                        htmlFor="FeaturesGazeboRancho"
                        checked={features.gazebo_rancho}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Garage"
                        name="features.garage"
                        id="FeaturesGarage"
                        htmlFor="FeaturesGarage"
                        checked={features.garage}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="carport"
                        name="features.carport"
                        id="FeaturesCarport"
                        htmlFor="FeaturesCarport"
                        checked={features.carport}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="storage_shed"
                        name="features.storage_shed"
                        id="FeaturesStorageShed"
                        htmlFor="FeaturesStorageShed"
                        checked={features.storage_shed}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Furnished"
                        name="features.furnished"
                        id="FeaturesFurnished"
                        htmlFor="FeaturesFurnished"
                        checked={features.furnished}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Washing Machine"
                        name="features.washing_machine"
                        id="FeaturesWashingMachine"
                        htmlFor="FeaturesWashingMachine"
                        checked={features.washing_machine}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Dryer Gas"
                        name="features.dryer.gas"
                        id="FeaturesDryerGas"
                        htmlFor="FeaturesDryerGas"
                        checked={features.dryer.gas}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Dryer Electric"
                        name="features.dryer.electric"
                        id="FeaturesDryerElectric"
                        htmlFor="FeaturesDryerElectric"
                        checked={features.dryer.electric}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Oven Gas"
                        name="features.oven.gas"
                        id="FeaturesOvenGas"
                        htmlFor="FeaturesOvenGas"
                        checked={features.oven.gas}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Oven Electric"
                        name="features.oven.electric"
                        id="FeaturesOvenElectric"
                        htmlFor="FeaturesOvenElectric"
                        checked={features.oven.electric}
                        type="checkbox"
                        onChange={setForm} />


                    <ItemForm label="Refrigerator"
                        name="features.refrigerator"
                        id="FeaturesRefrigerator"
                        htmlFor="FeaturesRefrigerator"
                        checked={features.refrigerator}
                        type="checkbox"
                        onChange={setForm} />


                    <ItemForm label="Freezer"
                        name="features.freezer"
                        id="FeaturesFreezer"
                        htmlFor="FeaturesFreezer"
                        checked={features.freezer}
                        type="checkbox"
                        onChange={setForm} />


                    <ItemForm label="Dishwasher"
                        name="features.dishwasher"
                        id="FeaturesDishwasher"
                        htmlFor="FeaturesDishwasher"
                        checked={features.dishwasher}
                        type="checkbox"
                        onChange={setForm} />


                    <ItemForm label="Microwave"
                        name="features.microwave"
                        id="FeaturesMicrowave"
                        htmlFor="FeaturesMicrowave"
                        checked={features.microwave}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Trash Compactor"
                        name="features.trash_compactor"
                        id="FeaturesTrashCompactor"
                        htmlFor="FeaturesTrashCompactor"
                        checked={features.trash_compactor}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Landscaping"
                        name="features.landscaping"
                        id="FeaturesLandscaping"
                        htmlFor="FeaturesLandscaping"
                        checked={features.landscaping}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Lawn"
                        name="features.lawn"
                        id="FeaturesLawn"
                        htmlFor="FeaturesLawn"
                        checked={features.lawn}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Pasture"
                        name="features.pasture"
                        id="FeaturesPasture"
                        htmlFor="FeaturesPasture"
                        checked={features.pasture}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Fence"
                        name="features.fence"
                        id="FeaturesFence"
                        htmlFor="FeaturesFence"
                        checked={features.fence}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Fruit Trees"
                        name="features.fruit_trees"
                        id="FeaturesFruitTrees"
                        htmlFor="FeaturesFruitTrees"
                        checked={features.fruit_trees}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="pool"
                        name="features.pool"
                        id="FeaturesPool"
                        htmlFor="FeaturesPool"
                        checked={features.pool}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Jacuzzi"
                        name="features.jacuzzi"
                        id="FeaturesJacuzzi"
                        htmlFor="FeaturesJacuzzi"
                        checked={features.jacuzzi}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Bathhub"
                        name="features.bathhub"
                        id="FeaturesBathhub"
                        htmlFor="FeaturesBathhub"
                        checked={features.bathhub}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Granite Counter Top"
                        name="features.granite_counter_top"
                        id="FeaturesGraniteCounterTop"
                        htmlFor="FeaturesGraniteCounterTop"
                        checked={features.granite_counter_top}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Tile Floors"
                        name="features.tile_floors"
                        id="FeaturesTileFloors"
                        htmlFor="FeaturesTileFloors"
                        checked={features.tile_floors}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Hardwood Floors"
                        name="features.hardwood_floors"
                        id="FeaturesHardwoodFloors"
                        htmlFor="FeaturesHardwoodFloors"
                        checked={features.hardwood_floors}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Carpeting"
                        name="features.carpeting"
                        id="FeaturesCarpeting"
                        htmlFor="FeaturesCarpeting"
                        checked={features.carpeting}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Handicap Facilities"
                        name="features.handicap_facilities"
                        id="FeaturesHandicapFacilities"
                        htmlFor="FeaturesHandicapFacilities"
                        checked={features.handicap_facilities}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Wheelchair Ramp"
                        name="features.wheelchair_ramp"
                        id="FeaturesWheelchairRamp"
                        htmlFor="FeaturesWheelchairRamp"
                        checked={features.wheelchair_ramp}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Wood Stove"
                        name="features.wood_stove"
                        id="FeaturesWoodStove"
                        htmlFor="FeaturesWoodStove"
                        checked={features.wood_stove}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Pizza Oven"
                        name="features.pizza_oven"
                        id="FeaturesPizzaOven"
                        htmlFor="FeaturesPizzaOven"
                        checked={features.pizza_oven}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm
                        label="Other"
                        name="features.other"
                        value={features.other}
                        onChange={setForm}
                    />
                </div>
            </div>
            <div className={styles.details_form_checks_container}>
                <div className={styles.details_form_checks_tag}>
                    <p>Community</p>
                </div>
                <div className={styles.details_form_checks_checks}>

                    <ItemForm label="Marina"
                        name="community.marina"
                        id="CommunityMarina"
                        htmlFor="CommunityMarina"
                        checked={community.marina}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Boat Slip"
                        name="community.boat_slip"
                        id="CommunityBoatSlip"
                        htmlFor="CommunityBoatSlip"
                        checked={community.boat_slip}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Tennis Courts"
                        name="community.tennis_courts"
                        id="CommunityTennisCourts"
                        htmlFor="CommunityTennisCourts"
                        checked={community.tennis_courts}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Community Pool"
                        name="community.community_pool"
                        id="CommunityCommunityPool"
                        htmlFor="CommunityCommunityPool"
                        checked={community.community_pool}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Club House"
                        name="community.club_house"
                        id="CommunityClubHouse"
                        htmlFor="CommunityClubHouse"
                        checked={community.club_house}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Security Guard"
                        name="community.security_guard"
                        id="CommunitySecurityGuard"
                        htmlFor="CommunitySecurityGuard"
                        checked={community.security_guard}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm label="Security Gate"
                        name="community.security_gate"
                        id="CommunitySecurityGate"
                        htmlFor="CommunitySecurityGate"
                        checked={community.security_gate}
                        type="checkbox"
                        onChange={setForm} />

                    <ItemForm
                        label="Other"
                        name="community.other"
                        value={community.other}
                        onChange={setForm}
                    />

                </div>
            </div>
        </div>
    )
}

export default Amenities