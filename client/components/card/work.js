import { Briefcase } from "react-feather"
import { Text } from "../text"

export const WorkCard = (props) => {
    return (
        <div className="flex pl-3 mb-5">
            <div className="pr-2">
                <Briefcase size={17} className="text-gray-500" />
            </div>
            <div className="grow">
                <Text className="text-sm font-medium capitalize text-gray-600">
                    software engineer
                </Text>
                <Text className="text-sm font-medium capitalize mb-1 text-gray-600">
                    NexusLab
                </Text>

                <Text className="text-sm font-normal text-gray-400 capitalize">
                    [10 May, 2020 - Current]
                </Text>
            </div>
        </div>
    );
}