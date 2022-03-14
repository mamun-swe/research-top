import { Briefcase } from "react-feather"
import { Text } from "../text"
import { dateTodate } from "../../utils/helper"

export const WorkCard = (props) => {
    return (
        <div className="flex pl-3 mb-5">
            <div className="pr-2">
                <Briefcase size={17} className="text-gray-500" />
            </div>
            <div className="grow">
                <Text className="text-sm font-medium capitalize text-gray-600">
                    {props?.data?.position}
                </Text>
                <Text className="text-sm font-medium capitalize mb-1 text-gray-600">
                    {props?.data?.organization}
                </Text>

                <Text className="text-sm font-normal text-gray-400 capitalize">
                    [{dateTodate(props?.data?.startFrom)} - {props.data && props.data.onGoing ? "Current" : dateTodate(props?.data?.endTo)}]
                </Text>
            </div>
        </div>
    );
}