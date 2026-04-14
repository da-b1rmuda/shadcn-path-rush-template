# API Reference

This package currently exposes one confirmed public API entity.

## Functions

- [runInit](./functions/run-init.md): initializes PWA support inside an existing React + Vite project.

## Classes

No public class export is confirmed at the package boundary.

## Types

No separately exported public type, interface, or enum is confirmed at the package boundary.

The emitted declaration file does contain helper type names used by [runInit](./functions/run-init.md), but `src/index.ts` does not re-export those names as standalone package exports.

## CLI note

The package also provides a CLI entry point, but the CLI command surface is documented in the guide pages rather than as a separate API entity.
