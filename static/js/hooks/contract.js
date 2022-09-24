import React from "react";
import {
    environment
} from "../environment";

export const StakingContract = (tronWeb) => {
    const [_stakeContract, _setStakingContract] = React.useState(null);
    const [_stakeTokenContract, _setStakingTokenContract] = React.useState(null);
    // const [_rewardTokenContract, _setRewardTokenContract] = React.useState(null);
    React.useEffect(() => {
        (async () => {
            if (tronWeb) {
                const stakeContract = await tronWeb
                    .contract()
                    .at(environment.stakeContract)
                _setStakingContract(stakeContract);
                const stakeTokenContract = await tronWeb
                    .contract()
                    .at(environment.tokenAddress2)
                _setStakingTokenContract(stakeTokenContract);
                // const rewardToken = await tronWeb.contract().at(environment.rewardToken);
                // _setRewardTokenContract(rewardToken);
            }
        })();
    }, [tronWeb])
    return {
        _stakeContract,
        _stakeTokenContract
    }
};