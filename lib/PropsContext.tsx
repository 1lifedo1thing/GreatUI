"use client";

import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";
import {
  getComponentPropsSchema,
  type ComponentPropsDefinition,
  type ControlSchema,
} from "./propsRegistry";

interface PropsContextType {
  slug: string;
  props: Record<string, unknown>;
  schemas: ControlSchema[];
  presets?: { name: string; values: Record<string, unknown> }[];
  definition?: ComponentPropsDefinition;
  setProp: (key: string, value: unknown) => void;
  applyPreset: (presetValues: Record<string, unknown>) => void;
  resetProps: () => void;
  activeTab: "props" | "timing" | "presets" | "code";
  setActiveTab: React.Dispatch<
    React.SetStateAction<"props" | "timing" | "presets" | "code">
  >;
}

const PropsContext = createContext<PropsContextType | undefined>(undefined);

export function PropsProvider({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  const definition = useMemo(() => getComponentPropsSchema(slug), [slug]);
  const schemas = definition.schemas;
  const presets = definition.presets;

  const defaultPropsState = useMemo(() => {
    const initial: Record<string, unknown> = {};
    schemas.forEach((schema) => {
      if (schema.defaultValue !== "" && schema.defaultValue !== undefined) {
        initial[schema.key] = schema.defaultValue;
      }
    });
    return initial;
  }, [schemas]);

  const [props, setProps] =
    useState<Record<string, unknown>>(defaultPropsState);
  const [prevSlug, setPrevSlug] = useState(slug);
  const [activeTab, setActiveTab] = useState<
    "props" | "timing" | "presets" | "code"
  >("props");

  if (prevSlug !== slug) {
    setPrevSlug(slug);
    setProps(defaultPropsState);
  }

  const setProp = useCallback((key: string, value: unknown) => {
    setProps((prev) => {
      const newProps = { ...prev, [key]: value };
      if (value === "" || value === undefined) {
        delete newProps[key];
      }
      return newProps;
    });
  }, []);

  const applyPreset = useCallback((presetValues: Record<string, unknown>) => {
    setProps((prev) => ({ ...prev, ...presetValues }));
  }, []);

  const resetProps = useCallback(() => {
    setProps(defaultPropsState);
  }, [defaultPropsState]);

  return (
    <PropsContext.Provider
      value={{
        slug,
        props,
        schemas,
        presets,
        definition,
        setProp,
        applyPreset,
        resetProps,
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </PropsContext.Provider>
  );
}

export function useProps() {
  const context = useContext(PropsContext);
  if (!context) {
    return {
      slug: "",
      props: {},
      schemas: [],
      presets: undefined,
      definition: undefined,
      setProp: () => {},
      applyPreset: () => {},
      resetProps: () => {},
      activeTab: "props" as const,
      setActiveTab: () => {},
    };
  }
  return context;
}
