
import { UUID } from "crypto";

import { Select } from "@/lib/components/ui/Select";
import { useBrainContext } from "@/lib/context/BrainProvider/hooks/useBrainContext";

const ListBrains = (): JSX.Element => {

    const { allBrains, setCurrentBrainId, currentBrainId } = useBrainContext();

    return (
        <Select
            options={allBrains.map((brain) => ({
            label: brain.name,
            value: brain.id,
            }))}
            value={currentBrainId as UUID}
            onChange={(brainId) => setCurrentBrainId(brainId)}
            label="Select a Brain"
            className="w-full"
        />
    )
  }

export default ListBrains;