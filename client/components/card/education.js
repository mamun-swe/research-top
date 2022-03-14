import { Edit3 } from "react-feather"
import { Text } from "../text"

export const EducationCard = (props) => {
    return (
        <div className="flex pl-3 mb-5">
            <div className="pr-2">
                <Edit3 size={17} className="text-gray-500" />
            </div>
            <div className="grow">
                <Text className="text-sm font-medium capitalize text-gray-600 mb-1">
                    {props?.data?.school}
                </Text>
                <Text className="text-sm font-normal capitalize text-gray-400">
                    {props?.data?.department} [{props?.data?.passingYear}]
                </Text>
            </div>
        </div>
    );
}