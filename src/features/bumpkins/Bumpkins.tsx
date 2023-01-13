import React, { useContext } from "react";
import { useActor } from "@xstate/react";

import { Context } from "features/auth/lib/Provider";
import { BumpkinMachineInterpreter } from "./lib/bumpkinMachine";
import { Loading } from "components/Loading";
import { Error } from "components/Error";
import { BumpkinList } from "./components/BumpkinList";
import { NoBumpkin } from "./components/NoBumpkin";

export const Bumpkins: React.FC = () => {
  const { authService } = useContext(Context);
  const [authState] = useActor(authService);

  const bumpkinService = authState.children
    .bumpkin as BumpkinMachineInterpreter;
  const [bumpkinState] = useActor(bumpkinService);

  if (bumpkinState.matches("loading")) {
    return <Loading />;
  }

  if (bumpkinState.matches("error")) {
    return <Error />;
  }

  if (bumpkinState.matches("noBumpkin") || bumpkinState.matches("minting")) {
    return <NoBumpkin />;
  }

  return <BumpkinList />;
};
